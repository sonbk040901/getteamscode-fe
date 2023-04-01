import { Select } from "./components/selectOption";
import Input from "./components/input/Input";
import styles from "./App.module.scss";
import { useState, useRef, useMemo } from "react";
import { toast } from "react-toastify";
function App() {
  const [subjectID, setSunjectID] = useState("");
  const [school, setSchool] = useState("");
  const [semester, setSemester] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();
  const getData = useMemo(() => {
    return (subjectID, school, semester) => {
      if (!subjectID || !school || !semester) {
        toast.error("Hãy nhập đầy đủ các thông tin");
        return;
      }
      setIsLoading(true);
      setResult("");
      const url = `https://getteamscode-be.onrender.com?subject=${subjectID}&institute=${school}&semester=${semester}`;
      toast.promise(
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setResult(JSON.stringify(data, "\t", 2));
            setIsLoading(false);
          }),
        {
          pending: "Đang tải dữ liệu về, có thể hơi lâu do đợi server",
          success: "Đã tải xong",
          error: "Lỗi, không thể tải được giữ liệu",
        }
      );
    };
  }, []);
  return (
    <div className={`${styles.container}`}>
      <section className={`${styles.content}`}>
        <Select
          title="Trường, viện"
          optionValues={[
            { value: "CNTT", label: "Công nghệ thông tin" },
            { value: "COKHI", label: "Cơ khí" },
            { value: "DTVT", label: "Điện tử viễn thông" },
            { value: "DIEN", label: "Điện" },
            { value: "SINHPHAM", label: "Sinh phẩm" },
            { value: "TOAN", label: "Toán" },
            { value: "HOAHOC", label: "Hóa học" },
          ]}
          onChange={(v) => setSchool(v?.value)}
          styles={{ backgroundColor: "red" }}
        />
        <Select
          title="Học kỳ"
          optionValues={[
            { value: "20191", label: "20191" },
            { value: "20192", label: "20192" },
            { value: "20201", label: "20201" },
            { value: "20202", label: "20202" },
            { value: "20211", label: "20211" },
            { value: "20212", label: "20212" },
            { value: "20221", label: "20221" },
            { value: "20222", label: "20222" },
          ]}
          onChange={(v) => setSemester(v?.value)}
        />
        <Input
          inputRef={inputRef}
          value={subjectID}
          title="Mã học phần"
          onChange={(v) => {
            setSunjectID(v);
            inputRef.current.focus();
          }}
        ></Input>
      </section>
      <div style={{ textAlign: "center", margin: ".5rem" }}>
        <button
          className={styles.button}
          style={isLoading ? { cursor: "progress", opacity: 0.5 } : {}}
          onClick={() => {
            getData(subjectID, school, semester);
          }}
        >
          Tìm kiếm
        </button>
      </div>
      <pre id="result" title="Thông tin mã teams và link teams vào lớp">
        {result}
      </pre>
    </div>
  );
}

export default App;
