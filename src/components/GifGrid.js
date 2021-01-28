import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  //const [images, setImages] = useState([]);

  // useEffect( ()=> {
  //     getGifs(category)
  //         // .then( imgs => setImages(imgs))
  //         .then( setImages );
  // }, [ category ])

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p className="animate__animated animate__flash">Loading...</p>}

      <div className="card-grid">
        {
          images.map((img) => (
            <GifGridItem
              key={img.id}
              {...img}
              // img={img}
            />
          ))
          // images.map( img => (
          //     <li key={img.id}>{img.title}</li>
          // ))
        }
      </div>
    </>
  );
};
