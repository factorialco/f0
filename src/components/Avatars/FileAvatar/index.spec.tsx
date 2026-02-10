import { render } from "@testing-library/react-native";
import React from "react";
import { FileAvatar } from "./";

describe("FileAvatar", () => {
  it("Snapshot - different file types", () => {
    const fileTypes = [
      { name: "document.pdf", type: "application/pdf" },
      { name: "image.jpg", type: "image/jpeg" },
      {
        name: "document.docx",
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      },
      {
        name: "spreadsheet.xlsx",
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
      {
        name: "presentation.pptx",
        type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      },
      { name: "text.txt", type: "text/plain" },
      { name: "video.mp4", type: "video/mp4" },
      { name: "audio.mp3", type: "audio/mpeg" },
      { name: "archive.zip", type: "application/zip" },
      { name: "data.csv", type: "csv" },
      { name: "webpage.html", type: "html" },
      { name: "readme.md", type: "markdown" },
      { name: "unknown.xyz", type: "undefined" },
    ];

    fileTypes.map((fileType, index) => {
      const { toJSON } = render(
        <FileAvatar
          key={index}
          file={new File([""], fileType.name, { type: fileType.type })}
        />,
      );

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
