import type { NextPage } from "next";
import { useTranslations } from 'use-intl';
import { HomePage } from "components/home/home_page";
import { GuestLayout } from "layouts/guest_layout";
const home: NextPage = () => {
  const t = useTranslations('Auth');
  return <GuestLayout title="Home">
    <HomePage/>
  </GuestLayout>;
};

export default home;

export function getStaticProps({ locale }:any) {
  return {
    props: {
      messages: {
        ...require(`../messages/shared/${locale}.json`),
      },
    },
  }
}
