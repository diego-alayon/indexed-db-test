import create from 'zustand'

const useEmails = create((set) => ({
  emails: [],
  addEmail: (email) => set((state) => ({ emails: [...state.emails, email] })),
  removeEmail: (email) =>
    set((state) => ({ emails: state.emails.filter((e) => e.id !== email.id) })),
  updateEmailStatus: (emailId, newStatus) =>
    set((state) => ({
      emails: state.emails.map((e) => {
        if (e.id === emailId) {
          return { ...e, status: newStatus }
        }
        return e
      }),
    })),
}))

export default useEmails
