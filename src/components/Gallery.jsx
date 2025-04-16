const Gallery = () => {
    return (
      <section className="bg-white py-10 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Galeri</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/img1.jpg" alt="Moment 1" className="rounded-lg shadow" />
          <img src="/img2.jpg" alt="Moment 2" className="rounded-lg shadow" />
          <img src="/img3.jpg" alt="Moment 3" className="rounded-lg shadow" />
          <img src="/img4.jpg" alt="Moment 4" className="rounded-lg shadow" />
        </div>
      </section>
    );
  };
  
  export default Gallery;
  