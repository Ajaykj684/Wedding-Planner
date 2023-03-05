import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import Divider from "@mui/material/Divider";

export default function FileSystemNavigator() {
  return (
    <>
      {/* <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, maxWidth: 400, color:"text.secondary"}}
    >
      <TreeItem nodeId="1" label="Category" sx={{mt:5}}>
        <TreeItem nodeId="2" label="Wedding Venues" sx={{mt:2}} />
        <TreeItem nodeId="2" label="Wedding Vendors" sx={{mt:2}} />
      </TreeItem>
      <Divider sx={{mt:3}}/>

      <TreeItem nodeId="2" label="Brides" sx={{mt:3}}>
        <TreeItem nodeId="10" label="Grooms" sx={{mt:2}} />
        <TreeItem nodeId="10" label="Bridal Makeover" sx={{mt:2}} />
      </TreeItem>
      <Divider sx={{mt:3}}/>

      <TreeItem nodeId="3" label="Jewellary" sx={{mt:3}}>
        <TreeItem nodeId="2" label="Clothings" sx={{mt:2}} />
      </TreeItem>
      <Divider sx={{mt:3}}/>

      <TreeItem nodeId="4" label="Location" sx={{mt:3}}>
        <TreeItem nodeId="10" label="Events" sx={{mt:2}} />
      </TreeItem>
      <Divider sx={{mt:3}}/>
    </TreeView> */}

      <div className="space-y-2">
        <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
            <span className="text-sm font-medium"> Category </span>

            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="bg-white border-t border-gray-200">
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700"> 0 Selected </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <ul className="p-4 space-y-1 border-t border-gray-200">
              <li>
                <label
                  for="FilterInStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterInStock"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    In Stock (5+)
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterPreOrder"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterPreOrder"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Pre Order (3+)
                  </span>
                </label>
              </li>

              <li>
                <label
                  for="FilterOutOfStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Out of Stock (10+)
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </details>

        <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
            <span className="text-sm font-medium"> Bridal </span>

            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="bg-white border-t border-gray-200">
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700">
                {" "}
                The highest price is $600{" "}
              </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between gap-4">
                <label
                  for="FilterPriceFrom"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceFrom"
                    placeholder="From"
                    className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </label>

                <label for="FilterPriceTo" className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceTo"
                    placeholder="To"
                    className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </label>
              </div>
            </div>
          </div>
        </details>

        <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
            <span className="text-sm font-medium"> Jewellary </span>

            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="bg-white border-t border-gray-200">
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700">
                {" "}
                The highest price is $600{" "}
              </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between gap-4">
                <label
                  for="FilterPriceFrom"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceFrom"
                    placeholder="From"
                    className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </label>

                <label for="FilterPriceTo" className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceTo"
                    placeholder="To"
                    className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </label>
              </div>
            </div>
          </div>
        </details>

        <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
            <span className="text-sm font-medium"> Location </span>

            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="bg-white border-t border-gray-200">
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700">
                {" "}
                The highest price is $600{" "}
              </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between gap-4">
                <label
                  for="FilterPriceFrom"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceFrom"
                    placeholder="From"
                    className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </label>

                <label for="FilterPriceTo" className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceTo"
                    placeholder="To"
                    className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                  />
                </label>
              </div>
            </div>
          </div>
        </details>

      </div>
    </>
  );
}
