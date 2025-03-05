
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { FileQuestionIcon } from "lucide-react";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <FileQuestionIcon className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Page Not Found</h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button asChild size="lg">
            <Link to="/">Go Home</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/docs">View Documentation</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
