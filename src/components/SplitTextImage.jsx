import React from 'react'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import plants from '../images/plant-shelves.jpg'

export default function SplitTextImage(props, children) {
    // const gImage = getSrc(data.image)
    //     const imageQuery = useStaticQuery(graphql`
  //     query {
  //       allFile {
  //         nodes {
  //           name
  //         }
  //       }
  //     }
  //   `)

  return (
    <div className="grid grid-cols-2 gap-16">
      {/* Text */}
      <div className="p-12 order-0">
        {props.data?.map((entry, idx) => (
          <>
            <h2 key={idx}>{entry.blockTitle}</h2>
            {entry?.paragraphs?.map((paragraph, iidx) => (
              <p key={iidx}>{paragraph}</p>
            ))}
          </>
        ))}
      </div>
      {/* Image */}
      <div className="p-12">
        <img src={plants} alt="" className="rounded-xl shadow-2xl"/> 
      </div>
    </div>
  )
}
