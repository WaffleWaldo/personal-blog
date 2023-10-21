<script>
    import { routingService } from '../stores/machineStore';
</script>


{#if $routingService.matches('home')}
    home
{:else if $routingService.matches('about')}
    about
{:else if $routingService.matches('contact')}
    contact
{:else if $routingService.matches('posts')}
    posts
{/if}