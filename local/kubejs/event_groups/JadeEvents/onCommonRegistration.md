# JadeEvents.onCommonRegistration

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: WailaCommonRegistrationEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| progress | ResourceLocation, Class<? extends T> |  | ServerExtensionProviderBuilder<T, CompoundTag> | ✘ |
| getRegistration |  |  | IWailaCommonRegistration | ✘ |
| energyStorage | ResourceLocation, Class<? extends T> |  | ServerExtensionProviderBuilder<T, CompoundTag> | ✘ |
| entityDataProvider | ResourceLocation, Class<? extends Entity> |  | ServerDataProviderBuilder<EntityAccessor> | ✘ |
| blockDataProvider | ResourceLocation, Class<? extends BlockEntity> |  | ServerDataProviderBuilder<BlockAccessor> | ✘ |
| itemStorage | ResourceLocation, Class<? extends T> |  | ServerExtensionProviderBuilder<T, ItemStack> | ✘ |
| fluidStorage | ResourceLocation, Class<? extends T> |  | ServerExtensionProviderBuilder<T, CompoundTag> | ✘ |
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
JadeEvents.onCommonRegistration((event) => {
	// This space (un)intentionally left blank
});
```

