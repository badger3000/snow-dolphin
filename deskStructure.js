// note: context includes `currentUser` and the client
export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !['playerStats'].includes(listItem.getId())
      ),
    ])

export const defaultDocumentNode = (S) => {
  return S.document().views([S.view.form()])
}
