module.exports = {
  category: "Actions",
  data: {
    name: "Jump To Action",
  },
  UI: [
    {
      element: "input",
      storeAs: "action",
      name: "Jump To Action #",
    }
  ],
  
  subtitle: "To Action #$[action]$",

  run(values, message, client, bridge) {
    bridge.call({
      type: 'jump',
      value: parseFloat(values.action)
    }, bridge.data.actions)
  },
};
