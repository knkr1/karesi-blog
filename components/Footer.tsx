import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import FloatingHeartsText from './MiniComponents/FloatingHeartsText'
export default function Footer() {
  return (
    <footer>
      <hr className="border-t-4 border-slate-800 rounded-full my-10 mx-7" />
      <div className="mt-10 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <span>Made with</span>
          <SocialIcon kind="nextjs" href="https://nextjs.org/" size={6}></SocialIcon>
          <span>| Designed with</span>
          <SocialIcon kind="tailwind" href="https://tailwindcss.com/" size={6}></SocialIcon>
          <span>| Most importantly, possible with</span>
          <FloatingHeartsText><span className='bg-gradient-to-b from-red-400 to-red-600 text-transparent bg-clip-text font-bold text-xl'>Love</span></FloatingHeartsText>
          </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}