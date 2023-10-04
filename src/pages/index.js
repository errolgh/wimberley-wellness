import * as React from 'react'
import Layout from '../components/Layout'
import ParallaxHero from '../components/ParallaxHero'
import SplitTextImage from '../components/SplitTextImage'
import * as data from '../data/index.js'
import {GatsbyImage, getImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout>
      <ParallaxHero />
      <main>
        <React.StrictMode>
          <SplitTextImage data={data.theWork}>
            {/* <GatsbyImage image={data.theWork.image} /> */}
          </SplitTextImage>
          <div className="mx-auto max-w-4xl my-10">
            <h2>
              Lorem ipsum dolor sit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              cupiditate. Nam quas a eos alias fugiat assumenda, illo
              reprehenderit unde nesciunt veniam! Totam, debitis quas.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              cupiditate animi sit soluta. Accusamus magni dicta eveniet
              voluptas iure officia laboriosam velit iusto est consequuntur
              quasi aperiam, quam ullam porro, qui, quas ex?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              nemo doloribus delectus quidem modi laborum est vitae temporibus
              unde neque officia ab suscipit, repellat sed iure consequuntur!
              Eligendi totam sed consequatur, ab quibusdam, natus odit maiores
              saepe nobis, placeat commodi quas voluptatibus labore molestiae
              minima cumque ea perferendis veniam obcaecati modi. Quos rerum rem
              necessitatibus animi velit recusandae tempora.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              corrupti et numquam nam quo ratione obcaecati fugiat illum
              quisquam cumque delectus officiis praesentium officia nobis, ab,
              accusamus incidunt! Culpa dolorem saepe laudantium quis mollitia
              repellendus debitis, porro assumenda velit fugit!
            </p>
          </div>
        </React.StrictMode>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

/*

General notes I have about the website:

The purposes of the website:

1. To appeal to a certain type of client. Generally educated but not stuffy, seeking a real connection with their therapist, understanding that it is a process we figure out together, not a place to get treated for a disease or something like that. Its a philosophical work. An art, not a science. I don’t want to say that explicitly, but some how convey that subtly, encouraging the kind of people who want that and seek to grow, dissuading the people who are not like that and define themselves by disorder for years on end. (Sound too mean? I hope you feel my vague meaning here because I know I am not saying it well.)

2. To attract junior therapists, LMSWs, to work with me as W2 employees, highlighting the strengths of the employment offer, as well as the positive vibe of the place itself.

3. To sell the association concept to independent therapists who are sick of working for other people and want autonomy, but who also don’t want to go at the business of solo therapy practice alone.



*/

/*

Wasn't specified as 'home page' by the client, but sounds home page-ish:

Part of how I want to do that with the website: 

Communicate my vision about the value of therapy, what it will mean to clients in a compelling way that moves prospective employees to want to work for me. 
	-Something different from the typical stuff on such websites.
	-None of the smoothed over fluffy, not-saying-anything BS that is the usual fare.

To show off the place as a home-like environment (but not actually a home), to show that it is 	NOT A CLINIC, and that there is nothing clinical about it. To show that it is a refined experience to do therapy here, but that it is warm, comfortable. A place where clients will feel proud that they go to, proud that they have refined personable therapy.

*/

/*
THE HOME PAGE

Whatever the top picture/design is, it needs to be something more authentic, maybe from the office pictures in some way, or something quite plain. Not sure, but I am not a fan of the present white with the leaves.

The headline message needs to be something bold… something that snaps the attention, not the usual BS fluff on these kind of websites. Something that conveys how it will be different here. (I need to meditate on that….) Something about how this is not about educating or indoctrinating an ideology, but something an authentic human to human relationship, with tuning in and drawing out the client’s own wisdom about their own life is the chief value…. I need to think about that some more. Something that will counter the common fear of judgment that keeps some people away from therapists…

Something, maybe temporary, that highlights the company is hiring and brings the user to the career page?

Something pertaining to the association…?

*/
