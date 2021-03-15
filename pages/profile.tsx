import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();

  return (
    <p>{router.query.name}'s Profile</p>
  );
};