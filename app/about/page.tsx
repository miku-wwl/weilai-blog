import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col item-start gap-4 md:flex-row md:justify-between">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Author
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
          <p>
            ✅ 2.5年全栈工作经验.
            <br />
          </p>
          <p>✅ 熟悉前后端开发.</p>
          ✅ 熟练掌握Java、Go、C、Javascript、Typescript等开发语言
          <br />
          ✅ 熟悉MySQL、Redis、Elasticsearch、Neo4j、HBASE、MongoDB
          <br />
          ✅ 熟练掌握React、NextJs、Springboot、Gin开发
          <br />
          <br />
          工作经历:
          <br />
          <br />
          ✅华为数字有限公司-计算产品线 2021.12~至今
          <br />
          <br />
          <br />
          <p>个人项目：</p>
          <Link href="/blog/image_saas">
            <u> ✅ 基于Next的跨框架SaaS应用.</u>
            <br />
          </Link>
          <Link href="/blog/fp">
            <u>
              ✅ Functional Programming in Go - Apply functional techniques in
              Golang.
            </u>
            <br />
          </Link>
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}
