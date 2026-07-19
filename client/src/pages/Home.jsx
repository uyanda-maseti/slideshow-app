function Home() {
  return (
    <div>
      <h1>Slideshow Creator</h1>

      <h2>Project Name</h2>
      <input type="text" placeholder="Enter project name" />

      <h2>Upload Images</h2>
      <input type="file" multiple />

      <h2>Images</h2>
      <p>No images uploaded.</p>

      <h2>Duration</h2>
      <select>
        <option>5 Seconds</option>
        <option>10 Seconds</option>
      </select>

      <h2>Transition</h2>
      <select>
        <option>Fade</option>
      </select>

      <br />
      <br />

      <button>Generate Video</button>
    </div>
  );
}

export default Home;