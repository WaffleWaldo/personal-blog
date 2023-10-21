<script lang="ts">
    import { routingService } from '../../stores/machineStore';


    const goTo = (state: any) => {
        routingService.send(state);
    }
</script>

<nav>
    <button class="btn btn-primary" on:click={() => goTo("GO_TO_HOME")}>HOME</button>
    <button class="btn btn-primary" on:click={() => goTo("GO_TO_ABOUT")}>ABOUT</button>
    <button class="btn btn-primary" on:click={() => goTo("GO_TO_CONTACT")}>CONTACT</button>
    <button class="btn btn-primary" on:click={() => goTo("GO_TO_POSTS")}>POSTS</button>
</nav>