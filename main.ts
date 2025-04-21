import { ChatAnthropic } from "@langchain/anthropic";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const model = new ChatAnthropic({
  model: "claude-3-7-sonnet-latest",
  temperature: 0
});

const messages = [
  new SystemMessage("Translate the following from English into Italian"),
  new HumanMessage("hi!"),
];

(async () => console.log((await model.invoke(messages)).text))();