import avatarImage from "./assets/avatar-jessica.jpeg";

const links = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];

export default function SocialLinksProfile () {
  return (
    <main className="flex justify-center items-center bg-[#141414] font-inter px-6 min-h-screen">
      <article className="bg-[#1f1f1f] text-center w-full max-w-[384px] p-10 rounded-xl">
        <img
          src={avatarImage}
          alt="Jessica Randall"
          className="mx-auto w-22 h-22 rounded-full"
        />

        <h1 className="text-white text-2xl font-semibold mt-6">
          Jessica Randall
        </h1>

        <p className="text-[#c6f82a] text-sm font-bold mt-2">
          London, United Kingdom
        </p>

        <p className="text-white text-sm mt-7">
          "Front-end developer and avid reader."
        </p>

        <div className="flex flex-col gap-4 mt-6">
          {links.map((link) => (
            <button
              key={link}
              className="bg-[#333333] text-white text-sm font-bold w-full py-3 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-[#c6f82a] hover:text-[#141414]"
            >
              {link}
            </button>
          ))}
        </div>
      </article>
    </main>
  );
}