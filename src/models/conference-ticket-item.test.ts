import { ConferenceTicketItem } from "./conference-ticket-item";
import { MAXIMUM_QUALITY, MINIMUM_QUALITY } from "../constants";

describe("ConferenceTicketItem", () => {
  it("should decrease sellIn by 1 each day", () => {
    const item = new ConferenceTicketItem("Conference Ticket", 15, 10);
    item.updateQuality();
    expect(item.sellIn).toBe(14);
  });

  it("should increase quality by 1 when sellIn is more than 10", () => {
    const item = new ConferenceTicketItem("Conference Ticket", 15, 10);
    item.updateQuality();
    expect(item.quality).toBe(11);
  });

  it("should increase quality by 2 when sellIn is 10 or less but more than 5", () => {
    const item = new ConferenceTicketItem("Conference Ticket", 10, 10);
    item.updateQuality();
    expect(item.quality).toBe(12);
  });

  it("should increase quality by 3 when sellIn is 5 or less but more than 0", () => {
    const item = new ConferenceTicketItem("Conference Ticket", 5, 10);
    item.updateQuality();
    expect(item.quality).toBe(13);
  });

  it("should set quality to 0 when sellIn is 0 or less", () => {
    const item = new ConferenceTicketItem("Conference Ticket", 0, 10);
    item.updateQuality();
    expect(item.quality).toBe(0);
  });

  it("should not increase quality above the maximum quality", () => {
    const item = new ConferenceTicketItem("Conference Ticket", 5, MAXIMUM_QUALITY - 1);
    item.updateQuality();
    expect(item.quality).toBe(MAXIMUM_QUALITY);
  });
});
