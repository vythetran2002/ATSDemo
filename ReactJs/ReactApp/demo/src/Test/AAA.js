import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Test from "./TestAvatar";
import { Page, Text, Document, PDFDownloadLink } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

function AAA() {
  const testRef = useRef();

  const handleSaveAsPDF = () => {
    window.print();
  };

  const handleGeneratePdf = () => {
    const input = testRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = canvas.width * 0.264583; // Convert px to mm (1 px = 0.264583 mm)
      const pdfHeight = canvas.height * 0.264583;
      const pdf = new jsPDF("p", "mm", [pdfWidth, pdfHeight], true);
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      const imgX = 0;
      const imgY = 0;
      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth, imgHeight);
      pdf.save("invoice.pdf");
    });
  };
  return (
    <>
      <Test testRef={testRef} />
      <button onClick={handleSaveAsPDF}>Down</button>
    </>
  );
}

export default AAA;
