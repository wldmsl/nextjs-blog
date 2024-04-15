import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>i love hanyang university</h1>
	  <img id="dog" src="https://source.unsplash.com/random" width="304" height="228"></img>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}