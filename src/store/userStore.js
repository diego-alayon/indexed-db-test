import create from "zustand";

const useStore = create((set) => ({
  emails: [], // lista de emails
  addEmail: (email) => set((state) => ({ emails: [...state.emails, email] })), // agrega un email a la lista
  removeEmail: (email) => set((state) => ({ emails: state.emails.filter((e) => e !== email) })), // remueve un email de la lista
}));

export default useStore;
