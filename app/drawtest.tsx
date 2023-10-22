import DrawingBoard from "../components/DrawingBoard";

const drawtest = () => {
  return (
    <DrawingBoard {...{language: 'spanish', word: 'apple', category: 'etc'}}/>
  )
}

export default drawtest;