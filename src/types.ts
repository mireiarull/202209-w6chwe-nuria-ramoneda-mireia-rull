export interface Robot {
  name: string;
  image: string;
  features: {
    speed: number;
    endurance: number;
    creationDate: number;
  };
}

export interface ApiRobot {
  robots: Robot[];
}
