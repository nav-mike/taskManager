import Task from "../../models/task";
import Color from "../../models/color";

export type State = {
  tasks: Task[];
};

export const initialState: State = {
  tasks: [
    {
      id: "id-1",
      title: "Taking My Sister To School",
      description: "I have to take my sister to school",
      color: Color.LightGreen,
      type: 'Basic',
      deadline: new Date(2021, 10, 12, 7, 30),
      remindAt: new Date(2021, 10, 12, 7, 15),
      tags: ["School", "Everyday"],
      done: false,
    },
    {
      id: "id-2",
      title: "Create a Banner In Canva",
      description: "I have to create a banner in canva",
      color: Color.Yellow,
      type: 'Basic',
      deadline: new Date(2021, 10, 12, 10, 0),
      tags: ["Works", "Activity"],
      done: false,
    },
    {
      id: "id-3",
      title: "Buying Home Appliances",
      description:
        "I have to buy a washing machine, a refrigerator and a dishwasher",
      color: Color.LightBlue,
      type: 'Basic',
      deadline: new Date(2021, 10, 12, 14, 0),
      remindAt: new Date(2021, 10, 12, 13, 0),
      tags: ["Lifestyle", "Home"],
      done: false,
    },
  ],
};
