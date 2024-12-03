# JEIAddedEvents.registerCategories

## Basic info

- Valid script types: [CLIENT]

- Has result? ✘

- Event class: RegisterCategoriesEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| data | IRecipeCategoryRegistration | ✘ |
| customRecipeTypes | Map<ResourceLocation, RecipeType<CustomJSRecipe>> | ✔ |
| overriddenRecipeTypes | Map<ResourceLocation, RecipeType> | ✔ |
| JEI_HELPERS | IJeiHelpers | ✔ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| wrap | RecipeType<T>, IRecipeCategory<T>, Consumer<RecipeCategoryWrapperBuilder<T>> |  | CustomRecipeCategory<T> | ✘ |
| register | RecipeType<T>, Consumer<RecipeCategoryBuilder<T>> |  | CustomRecipeCategory<T> | ✘ |
| custom | ResourceLocation, Consumer<RecipeCategoryBuilder<CustomJSRecipe>> |  | CustomRecipeCategory<?> | ✘ |
| getOrCreateCustomOverriddenRecipeType | ResourceLocation, RecipeType<T> |  | RecipeType<T> | ✔ |
| removeCustomRecipeType | ResourceLocation |  | void | ✔ |
| clearCustomRecipeTypes |  |  | void | ✔ |
| clearOverriddenRecipeTypes |  |  | void | ✔ |
| removeOverriddenRecipeType | ResourceLocation |  | void | ✔ |
| getOverriddenRecipeType | ResourceLocation |  | RecipeType<?> | ✔ |
| getOrCreateCustomRecipeType | ResourceLocation |  | RecipeType<CustomJSRecipe> | ✔ |
| getCustomRecipeType | ResourceLocation |  | RecipeType<CustomJSRecipe> | ✔ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
JEIAddedEvents.registerCategories((event) => {
	// This space (un)intentionally left blank
});
```

