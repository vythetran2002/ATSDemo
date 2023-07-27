import { render } from "@testing-library/react";
import React, { useRef, useState } from "react";
import DialogCustom from "./Dialog";
import "../css/test.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { html2pdf } from "html2pdf.js";
import { useReactToPrint } from "react-to-print";
import { Page, Text, Document, PDFViewer } from "@react-pdf/renderer";

function Test(props) {
  const pdfRef = useRef();
  const pdfRef2 = useRef();
  const pdfRef3 = useRef();

  const handleGeneratePdf = () => {
    const input = pdfRef3.current;
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
      <div ref={props.testRef}>
        <div ref={props.testRef}>
          <div ref={pdfRef3} className="container" id="html-content">
            <div className="avatar">
              <img
                src="https://i.pinimg.com/564x/eb/57/6f/eb576ff023487bcb1fa3ad61ee7b23ee.jpg"
                alt=""
              />
            </div>
            <div className="name">
              <h1>HO HOANG</h1>
              <div className="specialize">Frond-End Developer</div>
              <ul className="contact">
                <li>
                  <span>P</span> +84123456789
                </li>
                <li>
                  <span>E</span> hohoang.dev@gmail.com
                </li>
                <li>
                  <span>W</span> lundevweb.com
                </li>
              </ul>
            </div>
            <div className="info">
              <ul>
                <li>
                  From <b>HCMC</b> - VietNam
                </li>
                <li>01/01/0101</li>
                <li>AAAA University</li>
              </ul>
            </div>
            <div className="intro">
              <h2>INTRODUCE MYSELT</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              eligendi omnis quasi dolores modi eius aliquam ipsum soluta,
              dolore tenetur excepturi praesentium porro alias itaque enim
              labore qui necessitatibus molestias hic cum deserunt ab! Illum sed
              eveniet distinctio, alias sunt repudiandae labore a dolorum
              tenetur? Harum deleniti mollitia odio neque.
            </div>
            <div className="experience">
              <h2>EXPERIENCE</h2>

              <div className="item">
                <h4>Frond-end Developer</h4>
                <div className="time">
                  <span>2020 - 2022</span>
                  <span>ABC D company</span>
                </div>
                <div className="des">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium officia nobis quas excepturi
                  consectetur quidem quia est neque doloremque.
                </div>
              </div>

              <div className="item">
                <h4>Student</h4>
                <div className="time">
                  <span>2015 - 2019</span>
                  <span>ACDC University</span>
                </div>
                <div className="des">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium officia nobis quas excepturi
                  consectetur quidem quia est neque doloremque.
                </div>
              </div>
              <h2 className="skills">SKILLS</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>PHP</li>
                <li>MySql</li>
                <li>Git</li>
                <li>Laravel</li>
              </ul>
            </div>
            <div className="project">
              <h2>PROJECTS</h2>
              <div className="item">
                <h4>Website shopping</h4>
                <div className="time">2020</div>
                <div className="web">www.lundevweb.com</div>
                <div className="location">Frond-end Developer</div>
              </div>

              <div className="item">
                <h4>Website shopping</h4>
                <div className="time">2020</div>
                <div className="web">www.lundevweb.com</div>
                <div className="location">Frond-end Developer</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  consequatur amet sed, est eum facilis repellendus atque
                  perspiciatis iste porro nobis autem explicabo expedita fugiat
                  nostrum. Eveniet eum autem culpa!
                  <ul>
                    <li>Lorem ipsum dolordolores.</li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequuntur, dolores.
                    </li>
                    <li>Lorem ipsum dolor sit amet consectetur dolores.</li>
                  </ul>
                </div>
              </div>

              <div ref={pdfRef2} className="item">
                <h4>Website shopping</h4>
                <div className="time">2020</div>
                <div className="web">www.lundevweb.com</div>
                <div className="location">Frond-end Developer</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  consequatur amet sed, est eum facilis repellendus atque
                  perspiciatis iste porro nobis autem explicabo expedita fugiat
                  nostrum. Eveniet eum autem culpa!
                  <ul>
                    <li>Lorem ipsum dolordolores.</li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequuntur, dolores.
                    </li>
                    <li>Lorem ipsum dolor sit amet consectetur dolores.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
