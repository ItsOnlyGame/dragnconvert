import { ConvertPage } from "~/components/convert-page";
import { useConverter } from "~/hooks/use-converter";
import { useDownload } from "~/hooks/use-download";

export default function RouteComponent() {
  const { download } = useDownload();
  const { convertToJPG } = useConverter();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length == 0) {
      return;
    }

    const filesArray = Array.from(e.target.files);
    const convertedFiles = await Promise.all(
      filesArray.map((file) => convertToJPG(file, 0.9)),
    );

    download(convertedFiles);
  };

  return (
    <ConvertPage
      title="PNG to JPG converter"
      handleUpload={handleUpload}
      fileTypes=".png"
    />
  );
}
