"use client";

import axios from "axios";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface ICatagory {
  name: string;
  discription: string;
}
interface ICatContext {
  category: ICatagory | null;
  setCategory: Dispatch<SetStateAction<ICatagory | null>>;
  loading: boolean;
}
export const CategoryContext = createContext<ICatContext>({
  category: { name: "", discription: "" },
  setCategory: () => {},
  loading: true,
});

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<ICatagory | null>(null);

  const [loading, setLoading] = useState(true);

  const fetchCategoryData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:8000/api/v1/allcategory");
      if (res.status === 201) {
        setCategory(res.data.category);
        // console.log("Бүх category харах", res.data.category);
      }
    } catch (error) {
      console.log("Category харахад алдаа гарлаа", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCategoryData();
  }, []);
  // console.log("Бүх category харах ", category);
  return (
    <CategoryContext.Provider value={{ category, setCategory, loading }}>
      {children}
    </CategoryContext.Provider>
  );
};
export const useUser = () => {
  return useContext(CategoryContext);
};

export default CategoryProvider;
