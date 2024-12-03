# TFCEvents.registerClimateModel

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: RegisterClimateModelEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getDefaultCurrentTemperatureCallback |  |  | TemperatureCallback | ✘ |
| getDefaultAverageTemperatureCallback |  |  | LevelPos2FloatCallback | ✘ |
| registerClimateModel | ResourceLocation, Consumer<KubeJSClimateModel> |  | void | ✘ |
| getDefaultAverageRainfallCallback |  |  | LevelPos2FloatCallback | ✘ |
| registerAdvancedClimateModel | ResourceLocation, Consumer<AdvancedKubeJSClimateModel> |  | void | ✘ |
| getDefaultAirFogCallback |  |  | LevelPosLong2FloatCallback | ✘ |
| getDefaultWaterFogCallback |  |  | LevelPosLong2FloatCallback | ✘ |
| getDefaultWindVectorCallback |  |  | WindVectorCallback | ✘ |
| newVec2 | float, float |  | Vec2 | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `TemperatureCallback getDefaultCurrentTemperatureCallback()`
```
Returns the callback version of TFC's overworld current temperature calculation
```

- `LevelPos2FloatCallback getDefaultAverageTemperatureCallback()`
```
Returns the callback version of TFC's overworld average temperature calculation
```

- `void registerClimateModel(ResourceLocation name, Consumer<KubeJSClimateModel> model)`

  Parameters:
  - name: ResourceLocation- The name of the climate model
  - model: Consumer<KubeJSClimateModel>- A consumer for a KubeJSClimateModel

```
Creates a new climate model with the given name and properties
```

- `LevelPos2FloatCallback getDefaultAverageRainfallCallback()`
```
Returns the callback version of TFC's average rainfall calculation
```

- `void registerAdvancedClimateModel(ResourceLocation name, Consumer<AdvancedKubeJSClimateModel> model)`

  Parameters:
  - name: ResourceLocation- The name of the climate model
  - model: Consumer<AdvancedKubeJSClimateModel>- A consumer for an AdvancedKubeJSClimateModel, which has access to the onWorldLoad and onChunkLoad methods

```
Creates a new climate model with the given name and properties
```

- `LevelPosLong2FloatCallback getDefaultAirFogCallback()`
```
Returns the callback version of TFC's air fog calculation
```

- `LevelPosLong2FloatCallback getDefaultWaterFogCallback()`
```
Returns the callback version of TFC's water fog calculation
```

- `WindVectorCallback getDefaultWindVectorCallback()`
```
Returns the callback version of TFC's wind vector calculation
```

- `Vec2 newVec2(float x, float z)`

  Parameters:
  - x: float- The x component
  - z: float- The y component

```
Creates a new Vec2 with the given x and y values, used for creating custom wind vectors in your models
```

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
TFCEvents.registerClimateModel((event) => {
	// This space (un)intentionally left blank
});
```

