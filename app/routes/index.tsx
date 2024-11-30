import { AppSidebar } from "@/components/app-sidebar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];
    console.log(file); // File object
    convertToPng(file);
  };

  const convertToPng = (inputFile: File) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Could not create a canvas");
      return;
    }

    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngDataUrl = canvas.toDataURL("image/png");

      // Create a download link
      const link = document.createElement("a");
      link.href = pngDataUrl;
      link.download = "converted-image.png";
      link.click();
    };

    img.src = URL.createObjectURL(inputFile);
  };

  return (
    <div className="flex flex-col items-center h-full w-full">
      <AppSidebar />

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <input type="file" placeholder="test" onChange={handleUpload} />
      </div>
    </div>
  );
}
