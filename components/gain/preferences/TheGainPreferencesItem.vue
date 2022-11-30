<template>
    <div class="gain-preferences__item">
        <span class="gain-preferences__title">
            {{itemData.title}}
        </span>
        <span class="gain-preferences__text">
            {{itemData.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "TheGainPreferencesItem",
        props: {
            itemData: {
                type: Object,
                required: true,
            }
        }
    }
</script>
