import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DownloadPDF = ({ pdfUrl }) => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = `${process.env.NEXT_PUBLIC_BASE_URL}/${pdfUrl}`;
    link.download = "file.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <a onClick={downloadPDF} href="#">
        <FontAwesomeIcon icon={faFilePdf} />
      </a>
    </>
  );
};

export default DownloadPDF;
