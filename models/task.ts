import Color from "./color";
import Type from "./type";

type Task = {
  id: string;
  title: string;
  description: string;
  color: Color;
  type: Type;
  deadline: Date;
  remindAt: Date;
  tags: string[];
  finished: boolean;
  place: Location;
}

export default Task;
