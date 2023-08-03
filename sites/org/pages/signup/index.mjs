// Dependencies
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// Components
import { PageWrapper } from 'shared/components/wrappers/page.mjs'
import { BareLayout } from 'site/components/layouts/bare.mjs'
import { SignUp } from 'shared/components/susi/sign-up.mjs'
import { FreeSewingAnimation } from 'shared/components/animations/freesewing.mjs'

// Translation namespaces used on this page
const namespaces = ['signup', 'errors']

const SignUpPage = ({ page }) => {
  return (
    <PageWrapper {...page} layout={BareLayout}>
      <div className="flex flex-col items-center h-screen justify-center text-base-content px-4">
        <div className="max-w-md">
          <SignUp />
        </div>
        <FreeSewingAnimation className="w-64 mt-8" />
      </div>
    </PageWrapper>
  )
}

export default SignUpPage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, namespaces)),
      page: {
        path: ['signup'],
      },
    },
  }
}
