export const metadata = {
  title: 'Lidia React Editor | Your favorite WYSIWYG editor 👩‍💻',
  description: 'Component offers a robust set of features designed to enhance text editing and customization within React applications.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  )
}
