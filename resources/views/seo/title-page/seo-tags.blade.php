<meta property="og:site_name" content="{{ settings('branding.site_name') }}" />
<meta property="twitter:card" content="summary" />
<title>
    {{ $title->name }} ({{ $title->year }}) -
    {{ settings('branding.site_name') }}
</title>
<meta property="og:url" content="{{ urls()->title($title) }}" />
<link rel="canonical" href="{{ urls()->title($title) }}" />
<meta
    property="og:title"
    content="{{ $title->name }} ({{ $title->year }}) - {{ settings('branding.site_name') }}"
/>

@if ($title->poster)
    <meta property="og:image" content="{{ $title->poster }}" />
    <meta property="og:width" content="300" />
    <meta property="og:height" content="450" />
@endif

<meta property="og:description" content="{{ $title->description }}" />
<meta name="description" content="{{ $title->description }}" />
<meta
    property="keywords"
    content="reviews,photos,user ratings,synopsis,trailers,credits"
/>
<meta property="og:type" content="video.movie" />

<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "Movie",
        "name": "{{ $title->name }}",
        "@id": "{{ urls()->title($title) }}",
        "url": "{{ urls()->title($title) }}",
        "image": "{{ $title->poster }}",
        "description": "{{ $title->description }}",
        "genre": [
            @foreach ($title->genres as $genre)
                "{{ $genre->name }}",
            @endforeach
        ],
        "keyword": [
            @foreach ($title->keywords as $keyword)
                "{{ $keyword->name }}",
            @endforeach
        ],
        "contentRating": "{{ $title->certification }}",
        @if(isset($credits['actors']))
            "actor": [
                @foreach ($credits['actors']->slice(0, 10) as $actor)
                    {
                        "@type": "Person",
                        "name": "{{ $actor->name }}"
                        "url": "{{ urls()->person($actor) }}"
                    },
                @endforeach
            ],
        @endif
        @if(isset($credits['directing']))
            "director": [
                @foreach ($credits['directing'] as $director)
                    {
                        "@type": "Person",
                        "name": "{{ $director->name }}"
                         "url": "{{ urls()->person($director) }}"
                    },
                @endforeach
            ],
        @endif
        @if(isset($credits['creators']))
            "creator": [
                @foreach ($credits['creators'] as $creator)
                    {
                        "@type": "Person",
                        "name": "{{ $creator->name }}"
                         "url": "{{ urls()->person($creator) }}"
                    },
                @endforeach
            ],
        @endif
        "datePublished": "{{ $title->year }}",
        "duration": "{{ $title->runtime }}",
        @if($title->rating)
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "{{ $title->rating }}",
                    "ratingCount": "{{ $title->vote_count }}",
                    "bestRating": "10",
                    "worstRating": "1"
            }
        @endif
    }
</script>
