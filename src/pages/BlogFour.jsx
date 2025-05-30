import BlogPostList from "../components/blog/blog-4/BlogPostList";
import {
  CTA,
  Pagination,
  PopularTags,
  SocialIcons,
  TopRated,
  Type,
} from "../components/common/page-componets";
import { feeds } from "../data/dummyData";

const BlogFour = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-x-14">
        <div className="top-0 mt-5 md:col-span-2 md:mt-0 h-fit md:sticky">
          <BlogPostList />
          <Pagination itemsPerPage={6} pageData={feeds} />
        </div>
        <div className="top-0 row-start-3 md:col-span-1 md:row-start-auto h-fit md:sticky">
          <input
            type="text"
            className="border outline-none bg-transparent dark:border-dark px-3 py-[0.35rem] w-full"
            placeholder="Enter Keywords.."
          />
          <Type />
          <TopRated />
          <PopularTags />
          <SocialIcons />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default BlogFour;
