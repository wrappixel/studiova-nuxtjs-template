import { Chance } from "chance";
import { random } from "lodash";
import { sub } from "date-fns";
import mock from "../mockAdapter";

// Main Images
import blog1 from "/images/blog/blog1.png";
import blog2 from "/images/blog/blog2.png";
import blog3 from "/images/blog/blog3.png";
import blog4 from "/images/projects/project3.webp";

// Detail images
import blog11 from "/images/blog/blog11.png";
import blog21 from "/images/blog/blog21.png";
import blog31 from "/images/projects/details/pd-43.webp";
import blog41 from "/images/projects/details/pd-61.webp";

import { uniqueId } from "lodash";

import type { BlogTypes } from "@/types/blog/BlogTypes";

const chance = new Chance();

const BlogGridData: BlogTypes[] = [
  {
    id: chance.integer({ min: 1, max: 2000 }),
    blog_image: blog1,
    blog_title: "A campaign that connects",
    blog_date: "Dec 24, 2025",
    blog_inner_image: blog11,
    blog_description:
      "Blogger outreach campaigns are strategic efforts by businesses to collaborate with influential bloggers, aiming to promote products, services, or content to a broader audience. This form of influencer marketing leverages the blogger s established credibility and reach within a specific niche.Key Steps to Launch a Successful Blogger Outreach Campaign:",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    blog_image: blog2,
    blog_title: "An breaking boundaries our latest brand redesign",
    blog_date: "Jan 26, 2025",
    blog_inner_image: blog21,
    blog_description:
      "Blogger outreach campaigns are strategic efforts by businesses to collaborate with influential bloggers, aiming to promote products, services, or content to a broader audience. This form of influencer marketing leverages the blogger s established credibility and reach within a specific niche.Key Steps to Launch a Successful Blogger Outreach Campaign:",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    blog_image: blog3,
    blog_title: "Recognized for design",
    blog_date: "May 28, 2025",
    blog_inner_image: blog31,
    blog_description:
      "Blogger outreach campaigns are strategic efforts by businesses to collaborate with influential bloggers, aiming to promote products, services, or content to a broader audience. This form of influencer marketing leverages the blogger s established credibility and reach within a specific niche.Key Steps to Launch a Successful Blogger Outreach Campaign:",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    blog_image: blog4,
    blog_title: "The Modern Lens Perspectives on Culture & Trends",
    blog_date: "June 11, 2025",
    blog_inner_image: blog41,
    blog_description:
      "Blogger outreach campaigns are strategic efforts by businesses to collaborate with influential bloggers, aiming to promote products, services, or content to a broader audience. This form of influencer marketing leverages the blogger s established credibility and reach within a specific niche.Key Steps to Launch a Successful Blogger Outreach Campaign:",
  },
];

mock.onGet("/api/data/blog/grid").reply(() => {
  return [200, BlogGridData];
});

// ----------------------------------------------------------------------
mock.onPost("/api/data/blog/post").reply((config: string | any) => {
  try {
    const { title } = JSON.parse(config.data);

    const paramCase = (t: string) =>
      t
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

    const post = BlogGridData.find(
      (_post: BlogTypes | string | any) => paramCase(_post.blog_title) === title
    );

    if (!post) {
      return [404, { message: "Post not found" }];
    }

    return [200, { post }];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});
