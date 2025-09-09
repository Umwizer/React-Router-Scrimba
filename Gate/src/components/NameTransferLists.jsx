// We have two lists of names, and we want to transfer every name
//  in the first list to the second list and every two seconds we
//  want to send one name, what would you add or change in these codes to make that happen?

import { useEffect, useState } from "react";

const NameTransferLists = () => {
  const firstList = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "Diana Prince",
    "Ethan Hunt",
  ];
  const [flist, setFirstList] = useState(firstList);
  const [secondList, setSecondList] = useState([]);

  useEffect(() => {
    if (firstList.length === 0) return;
    const interval = setInterval(() => {
      setFirstList((prevFirst) => {
        if (prevFirst.length === 0) {
          clearInterval(interval);
          return prevFirst;
        }
        const [first, ...rest] = prevFirst;
        setSecondList((prevSecond) => [...prevSecond, first]);
        return rest;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [firstList.lengthx]);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="grid grid-cols-2 gap-8">
        {/* First List */}
        <div className="bg-blue-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-blue-800 mb-4">First List</h2>
          <ul className="space-y-2">
            {firstList.map((name, index) => (
              <li key={`first-${name}-${index}`} className="text-blue-700">
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Second List */}
        <div className="bg-green-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-green-800 mb-4">Second List</h2>
          <ul className="space-y-2">
            {secondList.map((name, index) => (
              <li key={`second-${name}-${index}`} className="text-green-700">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NameTransferLists;
