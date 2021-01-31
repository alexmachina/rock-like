## Rock Button Front-End

### Starting in development

```bash
yarn install
yarn start
```

#### Requirements

the rest-api must be listening on port 3001

# Lib stack

- TypeScript
  used for type checking.

- Styled-Components
  used for a more idiomatic styling.

# Modules

The bulk of the logic is inside the [useUserLikes hook](src/hooks/useUserLikes.ts).
This hook provides both the state and the like and unlike functions, needed to interact with the API.

```ts
liked: boolean;
likes: number;
loading: boolean;
like: () => Promise<void>;
unlike: () => Promise<void>;
```

There is a Loader and a ThumbsUpRegular and ThumbsUpSolid components. These are pure components, with no side effects, and can be unit tested later.
