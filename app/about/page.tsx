import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col item-start gap-4 md:flex-row md:justify-between">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="w-48 h-48">
            <AvatarImage src="avatar.png" alt={siteConfig.author} />
            <AvatarFallback>Weilai</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          ✅ 擅长各种Hello Wolrd. <br />
          ✅ 精通excel. <br />
          ✅ 摸鱼工程师. <br />
          ✅ Holding the sun, moon, and stars, there is no one like me in the
          world. <br />
          ✅ Majestic demeanor of a Great <br />❎ Hehuan Sect Supreme Elder
        </p>
      </div>
    </div>
  );
}
