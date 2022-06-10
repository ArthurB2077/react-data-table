# React Delta Table

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)


## :checkered_flag: Requirements
React Data Table Component requires the following be installed in your project:

- React 16.8.0+
- React DOM 16.8.0+

If you're using Typescript: 

- Typescript 4.7.3

## :package: Installation

### npm

```
npm install react-delta-table
```

### yarn

```
yarn add react-delta-table
```

## :rocket: How to use



```swift
import AdvancedList

@State private var listState: ListState = .items

AdvancedList(yourData, content: { item in
    Text("Item")
}, listState: listState, emptyStateView: {
    Text("No data")
}, errorStateView: { error in
    Text(error.localizedDescription)
        .lineLimit(nil)
}, loadingStateView: {
    Text("Loading ...")
})
```

### 📄 Pagination

The `Pagination` functionality is now (>= `5.0.0`) implemented as a `modifier`.

**The view created by the `content` `ViewBuilder` of your pagination configuration object will only be visible below the List if the last item of the List appeared! That way the user is only interrupted if needed.**

**Example:**

```swift
@State private var paginationState: AdvancedListPaginationState = .idle

AdvancedList(...)
.pagination(.init(type: .lastItem, shouldLoadNextPage: {
    paginationState = .loading
    DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
        items.append(contentsOf: moreItems)
        paginationState = .idle
    }
}) {
    switch paginationState {
    case .idle:
        EmptyView()
    case .loading:
        if #available(iOS 14, *) {
            ProgressView()
        } else {
            Text("Loading ...")
        }
    case let .error(error):
        Text(error.localizedDescription)
    }
})
```
