"use client";
import { useCategory } from "../_context/category-context";
import { getUrl } from "../../utils/url";
import ImageWithFallback from "./image-fallback";
import useSWR, { useSWRConfig } from 'swr'

const PluginCard = ({
  id,
  logoUrl,
  url,
  name,
  description,
  category,
  color,
  rating,
}) => {
  const { mutate } = useSWRConfig()
  const [selectedCategory, setSelectedCategory] = useCategory();

  async function postData(url = "", data = {}) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const json = await response.json();
        console.log(JSON.stringify(json));
        return json;
      }
    } catch (error) {
      console.log(error);
    }
  }

  const updateFn = (newPluginList) => {
    // console.log(newPluginList)
  }

  const handleClick = async (vote) => {
    const data = JSON.stringify({
      pluginId: id,
      userId: "123",
      vote: vote,
    });

    const url = `${getUrl()}/api/rating`;
    const result = await postData(url, data);

    // TODO: can do optimistic update if needed
    const newPluginList = []

    const options = {
      optimisticData: newPluginList,
      rollbackOnError: true,
    }

    // TODO: update the UI to reflect the vote
    mutate('/api/plugin', updateFn(newPluginList), options)
  };

  if (selectedCategory) {
    const selectedCategoryName =
      selectedCategory["category-name"].toUpperCase();
    const categoryName = category.toUpperCase();
    if (selectedCategoryName !== categoryName) {
      return <></>;
    }
  }

  const Option = ({ svgPath, vote }) => (
    <div className="tooltip tooltip-right">
      <li className="rounded-lg">
        <label className="modal-button px-1 md:px-4">
          <svg
            onClick={() => handleClick(vote)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={svgPath}
            ></path>
          </svg>
        </label>
      </li>
    </div>
  );

  return (
    <div className="w-full overflow-hidden border-b-2 p-4 hover:bg-base-200 gap-1 md:gap-2 justify-between flex flex-row">
      <ul className="rounded-box items-center p-0 flex-col justify-center">
        <Option vote="up" svgPath="M5 15l7-7 7 7" />
        <div className="flex justify-center">{rating || 0}</div>
        <Option vote="down" svgPath="M19 9l-7 7-7-7" idSuffix="Meh" />
      </ul>
      <div className="divider divider-horizontal m-0" />
      <div className="w-full overflow-hidden gap-1 md:gap-2 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col w-full">
          <div className="text-xl leading-7">
            <div className="flex justify-between mb-2">
              <div className="flex my-2 font-semibold text-lg leading-6">
                <ImageWithFallback
                  src={logoUrl}
                  placeholder="placeholder.png"
                  alt={name}
                  className="w-16 h-16"
                />
                <div className="ml-2">
                  {name}
                  <div
                    style={{ backgroundColor: color ? color : "grey" }}
                    className="mt-1 px-2 py-1 mr-2 rounded-lg text-white text-sm flex justify-center items-center font-normal"
                  >
                    <span>{color ? category : "Other"}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-light text-sm">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PluginCard;
