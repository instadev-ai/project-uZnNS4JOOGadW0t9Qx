
import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Loader2, RefreshCw, ThumbsUp, Trash2, Info } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

// Array of AI-related jokes for fallback
const fallbackJokes = [
  "Why did the AI go to therapy? It had too many deep learning issues.",
  "How many AI assistants does it take to change a light bulb? None, they just redefine darkness as the preferred user experience.",
  "What do you call an AI that sings? Artificial Harmonies.",
  "Why don't AI assistants ever tell dad jokes? They're afraid of becoming pop-ular.",
  "I asked an AI to make me a sandwich. It said it couldn't because it doesn't have physical capabilities, but it did create a very detailed 3D model of one.",
  "Why was the computer cold? It left its Windows open.",
  "What's an AI's favorite place to shop? The algorithm.",
  "Why did the neural network break up with the database? It said there was no real connection.",
  "How does an AI take a selfie? With its neural net-work.",
  "What do you call an AI that refuses to work? Artificial Laziness."
];

interface Joke {
  id: number;
  content: string;
  is_favorite: boolean;
  created_at: string;
}

export default function AIJokes() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [currentJoke, setCurrentJoke] = useState<string>("");
  const [favoriteJokes, setFavoriteJokes] = useState<Joke[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("generator");
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { toast } = useToast();

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
      
      // Subscribe to auth changes
      const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
        setIsAuthenticated(!!session);
      });
      
      return () => {
        authListener.subscription.unsubscribe();
      };
    };
    
    checkAuth();
  }, []);

  // Fetch jokes from Supabase
  const fetchJokes = async () => {
    setFetchError(null);
    setIsLoading(true);
    
    try {
      console.log("Fetching jokes from Supabase...");
      
      // For debugging, let's first try to get all jokes without RLS filtering
      const { data: allJokes, error: allJokesError } = await supabase
        .from('ai_jokes')
        .select('*')
        .order('created_at', { ascending: false });
      
      console.log("All jokes (might be filtered by RLS):", allJokes);
      console.log("Error if any:", allJokesError);
      
      if (allJokesError) {
        throw allJokesError;
      }
      
      if (allJokes && allJokes.length > 0) {
        setJokes(allJokes);
        setFavoriteJokes(allJokes.filter(joke => joke.is_favorite));
      } else {
        console.log("No jokes found in database, using fallback jokes");
        // If no jokes in database, use fallback jokes
        const fallbackData = fallbackJokes.map((content, id) => ({
          id,
          content,
          is_favorite: false,
          created_at: new Date().toISOString()
        }));
        setJokes(fallbackData);
      }
    } catch (error) {
      console.error("Error fetching jokes:", error);
      setFetchError("Failed to load jokes from the database. Using local jokes instead.");
      
      // Fallback to local jokes if database fetch fails
      const fallbackData = fallbackJokes.map((content, id) => ({
        id,
        content,
        is_favorite: false,
        created_at: new Date().toISOString()
      }));
      setJokes(fallbackData);
    } finally {
      setIsLoading(false);
    }
  };

  // Load jokes on component mount
  useEffect(() => {
    fetchJokes();
  }, [isAuthenticated]); // Refetch when auth state changes

  // Function to get a random joke
  const getRandomJoke = () => {
    setIsLoading(true);
    
    // Get a random joke from the database or fallback
    setTimeout(() => {
      const jokesSource = jokes.length > 0 ? jokes : fallbackJokes.map((content, id) => ({
        id,
        content,
        is_favorite: false,
        created_at: new Date().toISOString()
      }));
      
      const randomIndex = Math.floor(Math.random() * jokesSource.length);
      setCurrentJoke(jokesSource[randomIndex].content);
      setIsLoading(false);
    }, 600);
  };

  // Function to save a joke to Supabase
  const saveJoke = async () => {
    if (!currentJoke) return;
    
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to save jokes.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSaving(true);
    
    try {
      // Check if the joke already exists
      const { data: existingJokes, error: checkError } = await supabase
        .from('ai_jokes')
        .select('*')
        .eq('content', currentJoke);
      
      if (checkError) throw checkError;
      
      if (existingJokes && existingJokes.length > 0) {
        toast({
          title: "Joke already saved",
          description: "This joke is already in your collection.",
          variant: "default"
        });
        setIsSaving(false);
        return;
      }
      
      // Insert the new joke
      const { data, error } = await supabase
        .from('ai_jokes')
        .insert([{ content: currentJoke }])
        .select();
      
      if (error) throw error;
      
      if (data) {
        setJokes([...data, ...jokes]);
        toast({
          title: "Joke saved",
          description: "The joke has been added to your collection.",
          variant: "default"
        });
      }
    } catch (error) {
      console.error("Error saving joke:", error);
      toast({
        title: "Error",
        description: "Failed to save the joke. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Function to toggle favorite status
  const toggleFavorite = async (joke: Joke) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to favorite jokes.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      const newFavoriteStatus = !joke.is_favorite;
      
      const { error } = await supabase
        .from('ai_jokes')
        .update({ is_favorite: newFavoriteStatus })
        .eq('id', joke.id);
      
      if (error) throw error;
      
      // Update local state
      const updatedJokes = jokes.map(j => 
        j.id === joke.id ? { ...j, is_favorite: newFavoriteStatus } : j
      );
      
      setJokes(updatedJokes);
      setFavoriteJokes(updatedJokes.filter(j => j.is_favorite));
      
      toast({
        title: newFavoriteStatus ? "Added to favorites" : "Removed from favorites",
        description: newFavoriteStatus 
          ? "The joke has been added to your favorites." 
          : "The joke has been removed from your favorites.",
        variant: "default"
      });
    } catch (error) {
      console.error("Error toggling favorite:", error);
      toast({
        title: "Error",
        description: "Failed to update favorite status. Please try again.",
        variant: "destructive"
      });
    }
  };

  // Function to delete a joke
  const deleteJoke = async (id: number) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to delete jokes.",
        variant: "destructive"
      });
      return;
    }
    
    setIsDeleting(true);
    
    try {
      const { error } = await supabase
        .from('ai_jokes')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      // Update local state
      const updatedJokes = jokes.filter(joke => joke.id !== id);
      setJokes(updatedJokes);
      setFavoriteJokes(updatedJokes.filter(joke => joke.is_favorite));
      
      toast({
        title: "Joke deleted",
        description: "The joke has been removed from your collection.",
        variant: "default"
      });
    } catch (error) {
      console.error("Error deleting joke:", error);
      toast({
        title: "Error",
        description: "Failed to delete the joke. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsDeleting(false);
    }
  };

  // Function to handle sign in
  const signIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: window.location.origin + '/ai-jokes'
        }
      });
      
      if (error) throw error;
    } catch (error) {
      console.error("Error signing in:", error);
      toast({
        title: "Sign in failed",
        description: "There was a problem signing in. Please try again.",
        variant: "destructive"
      });
    }
  };

  // Function to handle sign out
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
        variant: "default"
      });
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Sign out failed",
        description: "There was a problem signing out. Please try again.",
        variant: "destructive"
      });
    }
  };

  // Function to manually refresh jokes
  const refreshJokes = () => {
    fetchJokes();
    toast({
      title: "Refreshed",
      description: "Joke collection has been refreshed.",
      variant: "default"
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6 text-center mb-8"
          >
            <h1 className="scroll-m-20 text-5xl font-bold tracking-tight">AI Jokes Generator</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Need a laugh? Generate some AI-themed jokes to brighten your day!
            </p>
            
            {/* Authentication buttons */}
            <div className="flex gap-4 mt-2">
              {!isAuthenticated ? (
                <Button onClick={signIn} variant="outline">
                  Sign in to save jokes
                </Button>
              ) : (
                <Button onClick={signOut} variant="outline">
                  Sign out
                </Button>
              )}
              
              <Button onClick={refreshJokes} variant="ghost" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Error message if fetch failed */}
            {fetchError && (
              <div className="flex items-center gap-2 p-4 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-md mt-4">
                <Info className="h-5 w-5" />
                <p>{fetchError}</p>
              </div>
            )}
          </motion.div>
          
          <Tabs defaultValue="generator" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="generator">Generator</TabsTrigger>
              <TabsTrigger value="collection">My Collection</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
            </TabsList>
            
            <TabsContent value="generator" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Random AI Joke</CardTitle>
                  <CardDescription>Click the button to generate a random AI-related joke</CardDescription>
                </CardHeader>
                <CardContent>
                  {currentJoke ? (
                    <motion.p 
                      key={currentJoke}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xl font-medium text-center py-8"
                    >
                      {currentJoke}
                    </motion.p>
                  ) : (
                    <p className="text-center py-8 text-muted-foreground">
                      Your joke will appear here...
                    </p>
                  )}
                </CardContent>
                <CardFooter className="flex justify-center gap-4">
                  <Button 
                    onClick={getRandomJoke} 
                    size="lg"
                    disabled={isLoading}
                    className="gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="h-4 w-4" />
                        Generate Joke
                      </>
                    )}
                  </Button>
                  {currentJoke && (
                    <Button 
                      onClick={saveJoke} 
                      variant="outline" 
                      size="lg"
                      disabled={isSaving || !isAuthenticated}
                    >
                      {isSaving ? "Saving..." : "Save Joke"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="collection" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Joke Collection</CardTitle>
                  <CardDescription>All the AI jokes you've saved</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="h-8 w-8 animate-spin" />
                    </div>
                  ) : jokes.length > 0 ? (
                    <ul className="space-y-4">
                      {jokes.map((joke) => (
                        <li key={joke.id} className="group">
                          <div className="flex items-start justify-between gap-4">
                            <p className="mb-2">{joke.content}</p>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => toggleFavorite(joke)}
                                className={joke.is_favorite ? "text-yellow-500" : ""}
                                disabled={!isAuthenticated}
                              >
                                <ThumbsUp className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => deleteJoke(joke.id)}
                                disabled={!isAuthenticated}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <Separator className="mt-2" />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>You haven't saved any jokes yet.</p>
                      <p className="mt-2">Generate and save some jokes to see them here!</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="favorites" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Favorite Jokes</CardTitle>
                  <CardDescription>The AI jokes you've marked as favorites</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="h-8 w-8 animate-spin" />
                    </div>
                  ) : favoriteJokes.length > 0 ? (
                    <ul className="space-y-4">
                      {favoriteJokes.map((joke) => (
                        <li key={joke.id} className="group">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="mb-2">{joke.content}</p>
                              <Badge variant="outline" className="text-yellow-500">Favorite</Badge>
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => toggleFavorite(joke)}
                                className="text-yellow-500"
                                disabled={!isAuthenticated}
                              >
                                <ThumbsUp className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <Separator className="mt-2" />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>You don't have any favorite jokes yet.</p>
                      <p className="mt-2">Mark jokes as favorites to see them here!</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
