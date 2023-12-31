const styleSheet = {
  children: {
    type: "TextData",
  },
  src: {
    type: "ImageSource",
  },
  backgroundColor: {
    type: "Color",
  },
  color: {
    type: "Color",
  },
  flex: {
    type: "Flex",
    alignItems: ["stretch", "start", "end", "center", "flex-start", "flex-end"],
    justifyContent: [
      "start",
      "end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    flexDirection: ["row", "column"],
  },
  font: {
    fontSize: {
      type: "Unit",
      min: 0.5,
      max: 10,
      step: 0.5,
      unit: "rem",
    },
    fontWeight: {
      type: "Unit",
      min: 400,
      max: 700,
      step: 100,
      unit: "",
    },
  },
  borders: {
    borderColor: {
      type: "Color",
    },
    borderWidth: {
      type: "Unit",
      min: 0,
      max: 10,
      step: 1,
      unit: "rem",
    },
    borderRadius: {
      type: "Unit",
      min: 0,
      max: 50,
      step: 1,
      unit: "rem",
    },
    borderTopLeftRadius: {
      type: "Unit",
      min: 0,
      max: 50,
      step: 1,
      unit: "rem",
    },
    borderTopRightRadius: {
      type: "Unit",
      min: 0,
      max: 50,
      step: 1,
      unit: "rem",
    },
    borderBottomLeftRadius: {
      type: "Unit",
      min: 0,
      max: 50,
      step: 1,
      unit: "rem",
    },
    borderBottomRightRadius: {
      type: "Unit",
      min: 0,
      max: 50,
      step: 1,
      unit: "rem",
    },
  },
  width: {
    type: "Unit",
    min: 0,
    max: 100,
    step: 1,
    unit: "%",
  },
  height: {
    type: "Unit",
    min: 0,
    max: 100,
    step: 1,
    unit: "%",
  },
  rootDimensions: {
    width: {
      type: "Unit",
      min: 0,
      max: 100,
      step: 1,
      unit: "vw",
    },
    height: {
      type: "Unit",
      min: 0,
      max: 100,
      step: 1,
      unit: "vh",
    },
  },
  paddings: {
    padding: {
      type: "Unit",
      min: 0,
      max: 10,
      step: 1,
      unit: "rem",
    },
    paddingTop: {
      type: "Unit",
      min: 0,
      max: 10,
      step: 1,
      unit: "rem",
    },
    paddingLeft: {
      type: "Unit",
      min: 0,
      max: 10,
      step: 1,
      unit: "rem",
    },
    paddingRight: {
      type: "Unit",
      min: 0,
      max: 10,
      step: 1,
      unit: "rem",
    },
    paddingBottom: {
      type: "Unit",
      min: 0,
      max: 10,
      step: 1,
      unit: "rem",
    },
  },
  margins: {
    margin: {
      type: "Unit",
      min: 0,
      max: 10,
      step: 1,
      unit: "rem",
    },
    marginTop: {
      type: "Unit",
      min: 0,
      max: 10,
      step: 1,
      unit: "rem",
    },
    marginLeft: {
      type: "Unit",
      min: 0,
      max: 10,
      step: 1,
      unit: "rem",
    },
    marginRight: {
      type: "Unit",
      min: 0,
      max: 10,
      step: 1,
      unit: "rem",
    },
    marginBottom: {
      type: "Unit",
      min: 0,
      max: 10,
      step: 1,
      unit: "rem",
    },
  },
};

export default styleSheet;
