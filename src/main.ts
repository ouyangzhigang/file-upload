import http from "http";


import Uploader from "./index.ts";

async function main() {
  const file = await fetch("https://coss-platform.fenqile.com/platformresource200/M00/ex/20250408221916-79f1818c-d708-401e-a05a-51e9a5ae445f.png", {
    headers: {
      origin: "https://coss-platform.fenqile.com",
    },
    method: 'GET',
    credentials: 'include'
  })
  const buffer = file.arrayBuffer()
  console.log(buffer)
  const uploader = new Uploader({
    headers: {
      appid: "68ed4a853ffa55a2b554aafa860fdb47c2a92100",
      token: "24e8b969a0a43bb051f28375bfa8cdf12927bca5",
    },
    url: 'https://oss-platform.fenqile.com/upload?type=file&scenes=platform_resource&output_type=json&plusflag=1',
    dataType: 'json',
    method: 'POST',
  }); // Initialize the uploader with options
  // Set options for the uploader
  // uploader.uploadAll() // Upload all files in the queue
  // uploader.addToQueue([]) // Add files to the queue
  // uploader.removeFromQueue([]) // Remove files from the queue
  console.log(uploader.addToQueue);
  return true
}

main().then(() => {
  console.log("done");
}).catch((err) => {
  console.error(err);
});

http.createServer((req: any, res: any) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
  console.log(req.url);
  console.log(req.method);
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
