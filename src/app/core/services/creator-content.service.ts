import { Injectable, signal } from '@angular/core';
import {
  CreatorDiscoveryModel,
  CreatorSummary,
  MasterclassModel,
  ShortFilmModel,
  VideoCardModel
} from '../models/content.models';

@Injectable({ providedIn: 'root' })
export class CreatorContentService {
  readonly featuredVideo = signal<VideoCardModel>({
    id: 'featured-fjords',
    title: 'The Silence of the Fjords',
    category: 'Newest',
    duration: '24:15',
    thumbnailUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC83aPCHkMb6q7SHuyIs-8i0hG1ivufu8cOAeq8EMy8jEm1JSpxXqRaRUIMT4auTBzAxo_IqhKx0X5TW0bIy5X-UeKxc5NxYZwEu5BU9sbTOoBLUfSjCK7HAaPkAsmdrTnnIB5l7e6X02A9d3bdJs3Q39mWWNZ-Vi5brV6zuKqxcyJpyNr9yClxw033vAUBqYluOhV_UZLS7JpGm1iOP7yvefhl03hKwHg1PJu6Lr-TcSmJieyDw2ymfNsx40R2IsJDrY1G4aN2LUk',
    creator: {
      id: 'creator-elena',
      name: 'Elena Vance',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAqvqGaYRqe34trhiAaDNL9ZAo_kCWPLgDTbJ9fY1pofBdGKhBS0Z6QcjMWgSXqGdw49gy6qYN-yfEwnqH8qUFeCdFFVU2rjGbb8kaYVsCKaC54KL9Ka0RIHEIwp8q435nw62JsP65EfeNLIR82gA4e5XtkTa9dfmYfsjIDfJck4N4wEwYPgYqrtg4zdO9U2y5SWDAAcv6T5DvS3fhzEXfdmQ6BzRc3fFQFhGxgqp9ojvXqpNMLGcguq4Mi674-XPHoEYR9CGgnBFM',
      specialty: 'Cinematic Landscapes'
    },
    description:
      'The latest masterpieces from the filmmakers and visual artists you follow. Curated for your cinematic journey.',
    badge: 'Newest'
  });

  readonly recentUploads = signal<VideoCardModel[]>([
    {
      id: 'recent-architecture',
      title: 'Shadow Geometry',
      category: 'Architecture',
      duration: '08:42',
      thumbnailUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD4G0Rpg394BnkVLJnJ6wiZ1MYlwzqBjErudDoFjBohL0oQ2AHiC852llbTMJewr_d_Inpr70itgmJ7G1kCf2SbBeLtfZIffADouRJVIGuBmMtIfeqYoftwi7XW729XMoQGnQ2NjI_iPyJ3PIhsNb7GCD5dB8fxNb8NsN48_5E8Xkg2IobOQyFnomhmakG5C-NXo6r-ldTzJQvZZy2gf8HJ0wJFEZjEmJSkJ6PoIlK5PU6timvpw76iiRwCaiNyAlVBAHNlY6x-2SA',
      creator: {
        id: 'creator-marco',
        name: 'Marco Rossi',
        avatarUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDMZ695Jb1Wyz03XhC3YBOmGMNXGoTTlwg4CAdvS0qU47IQ-26Y0C-NeDc2Xje1SiiwnndWM6o8oJNKwtrZO5VKiBmMDwd5C-yTbHYxrAHluMKfpOjhIgOmaMoN1G6SG4PmJNevE4rwtZ6fZQWfffIxB_5YIehndRx1MLCbVR0P-ACSkU0NvIFBH55nSjKQGP0m8qU6ofbjvgDLgT7h8EAh-NkA_8CzoIfq4zOyl4eEXJisA0lp-_c0X2seFzrGJfw7VVCruuoHmA8',
        specialty: 'Architecture'
      }
    },
    {
      id: 'recent-film-set',
      title: 'Lens Memory',
      category: 'Cinematography',
      duration: '12:09',
      thumbnailUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC54ooeVIzlmbcRQUPLKZaMwgg9kGca1DjYnMPlq-hQzYH6qhWeJW5Mvo1HofyjCwOjOUhAmmuC2dh-K2n_ydHI7TWwsvYZfIRJFHlhdj4-KTBy4sFcYbUjoiS_T1RhkY5vSiV80QcpOPhO4RhlnJID5kjIYKYmKDO2MyESx7XMoa_kYWqKdk-IlF7k1iCVhCWLavX8YNIXn68_wuNKChAH4MTDyPaOI_Zy_gHVLyi98PhZOffyPNYjjB7IHvmO8eGqWzRAukWT9C4',
      creator: {
        id: 'creator-sarah',
        name: 'Sarah Jenkins',
        avatarUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCbKnHsMWcYAvQWxyuVB4y94v7fCR1ZrYLCtKh0GBsocPMfjRBVwW0GIFbJCYsRGpmDlvQJhUSO1iG1So11YZzaT-EVdDfyCM8ijwuzPkcO2LcwxxMYcOYXVcsQONsfxgnVJid1DOnPhDvlv4VpP0FS7L-3emYLBbz9mCIoZ6mPm158vgFrUDKwgMSx_NZ9BcDdi-zwPRgzNK06ljYiNmNQ_YjqtMrUz-sHLS1Cdf78BrSiIFVrMB0m6LHGZUxD7bmv9cD6rKi7TkQ',
        specialty: 'Cinematography'
      }
    },
    {
      id: 'recent-neon',
      title: 'Rain-Slick Neon',
      category: 'Cyberpunk Art',
      duration: '09:17',
      thumbnailUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDaI6X_T8MVNl7ee5gtYq7IBDlQNtuEi9YUW84CawHulOftuw1g3Ayrp4m9bMAy1BtxAjZ-F4hf1BYM62BGPfgBFweNPuq6zDVLUWR5qGXlBsA62kVmCpKuRpolvLWxPlro7L5nKEqh_eeW82zjJOOXo3ibL61gIInql12PwyRmU5RDFyBtrI_bOvMSj7F-SRUp3qeTm_G-m-U3Qv9jfG2QbqHSsBGtYygCt_n7IEdYBnqTDAd2zNfmiXx2_caukB7WZiUKLY2lauE',
      creator: {
        id: 'creator-neo',
        name: 'Neo K.',
        avatarUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC5ovT8oIArTqylvalwAzF2ryAVTLktSJNaNeq9zcUiUPVowWfm2cYaizR_c6DhAo9GNaR_pd_KyxgpWjhAFFBGkT8YwiiFRmOxoROc1LBCiEWusZBJSCUTcJTYfEkZAGuE3-Ham4Yt2vneBMsdndiq43nsDE4SiLOTe1fgTw9_oQBVa2PXACO8EttRhlF8g6-x97F7RRmIdKoM54ojrK7tzeUsq4Zj42b_JC0xkcPiHxNv37I4jNdXIq_QjjvfKlAs-uTAmmZ4pKo',
        specialty: 'Cyberpunk Art'
      }
    },
    {
      id: 'recent-nature',
      title: 'River Through the Canopy',
      category: 'Documentary',
      duration: '14:21',
      thumbnailUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCVkZ99CQRQVn2B1b56lIPOBf4LnCQHj1dLD2GmtwagCx9yrH12hS6ZcBeR8sB3x9aeqJFUeMVD6o-1qsonA0O-KMftuh6yuYqs--p64RcvQWdrSOkZ_o_O7nEHBGXiJnp_DqpTbqlrwYTOLsS7swHaBFL2X2RgK8ss27LWjUsSKnntOkCpLlPnhAO5mjjV93IFTj7iNpmxFmz8-P-gww-ITbVVCfWVlKEZpUxaLLZixoaGulBmSjZnBCz0FrGjm8UfMW5VJTGIN4M',
      creator: {
        id: 'creator-wild',
        name: 'Wild Lens',
        avatarUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAwyqamvX-JbSrp75TruCvOPcAfjmNBjHaCU-B4dchE3K-AybYK93gh5Eo1JsUAmPV2dpQCrwb-bNvwaFZWk4MW1fUCJKXhQQl12eeil8og7oX7ntv6nAiOUtg3L2M0guteTobj9vIIO39wMuzNucMFC849S1IA9V89clagGWlkWhHY8cCHnotrHyFCaFiFsXkLItcyV-2WbqVPuLJCSjKd0fbzrFrlHKTaaFfjzwYizGznWZcUew0FilOOhGckzyw6Ndhr90dxfFQ',
        specialty: 'Documentary'
      }
    }
  ]);

  readonly masterclasses = signal<MasterclassModel[]>([
    {
      id: 'masterclass-lighting',
      title: 'Lighting for Emotional Narrative',
      description:
        'Learn how to manipulate shadows and color temperature to evoke deep empathy in your viewers.',
      thumbnailUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB3UOMGzHO4aKMvlJXYTbR4XHdWXRZIiYlxJN7DDovMM-IKDSe4w8OzjrIf9bn6sn1bGtoATeZuGqKbhIYITGwDaIxXhWI3Qg2A7carMvauggREVpspT-HTjmwV4nUrWu5Z8D8m_FnLQKc-1uJEDlmLYlSnsR2cpRHKrH2T9ZJyhwkmsp1HxFzr79hhSGypF9uqFKTM0tG87iWu5evJitUlZcBO4l1AhQz3Ccrh8SJn5Y88LAowdc3AycD0nXOmbLoMZnnAP3JGTDM',
      creator: {
        id: 'creator-thomas',
        name: 'Thomas Wright',
        avatarUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAfv7NpPxESi64S6oCqL9O5h2xjoZURnmEi-sKIShoPpSnd2n3WOdiDKsxE4sn307kwZKLWX0CrzRL4jFfv9oKXyxiZo3lpvFzW_EVCx59o5s0970iCp2lT65vXjMKIaZSiHWCJH8GEH8F2LF2ne96Pp2VGnuCljsZ5GCBOKzZ0x11vfTa9Ah-9FS-ZaORx33t4QoewJud-l6OmgQNKa4ILjSvQLu12Rgd7TjO7vBaMeCad1rvuFHx9EydzyF_teuHQCy1Hx9WYvIY',
        specialty: 'Lighting'
      },
      lessonsCount: 12,
      label: 'PREMIUM'
    },
    {
      id: 'masterclass-davinci',
      title: 'Post-Production Flow: DaVinci Mastery',
      description:
        'The ultimate guide to high-end color grading and compositing for cinematic results.',
      thumbnailUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBXi2hIBseTug6A0-B1OFiYSXTMP6YkOqj-HgKdz6SAhjS8kgb3POYF5PmhrErSPy6Lh1QoFhxsEE7vw6XS_srTnjm5uTcDmhAPBixqEwPei0JGCyGC_8nUR1yY39EAkLH6pIRKyiHLNGom1RIhzPbwmi7j7uGbGydvrjR0KoPBuaMZV_KqL3Yza3N9jLxpz1vsWdJnjaQpYPikEMA02dvHNMYhQWLksDDtOjTHUT1zngCzhhCNzAmsDkg6rEACd7P8nSnJEkh7Yxw',
      creator: {
        id: 'creator-liam',
        name: 'Liam Chen',
        avatarUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAyboQPYotBL_snqtO8ZIacSP-yyGDira9WUQE5hHHC8RLqnEiMcUNdg7wMgLZAOhJ4M1WtY1AHTaotpgGN88UH-zzAIACN1pBIRRomJB4uWeanIiMoKrFifUFjPROQLcQTkYhs5MU19hS2EhGfRkOUsTqAia5wwCPq_mIL3mlJvr636P6YaVnqGST-wKOB1aanl8GkKvKmS45CFrxKWyZjP4l8e_xmNAxyeFHb_SFBXtQdKo-r9OnR9Xk4rfMK84KaboydYjOTeZ8',
        specialty: 'Post Production'
      },
      lessonsCount: 18,
      label: 'FEATURED'
    },
    {
      id: 'masterclass-storytelling',
      title: 'Visual Storytelling: Beyond Script',
      description:
        'Directing actors and camera movement to tell stories without a single word of dialogue.',
      thumbnailUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBm7UOFJx9-jm55BohCg6uU3rzEYb26Kpk1VhY723HWN6h8sATas-MuodWeqHoyWByh4ECariumcukX7zwvdkl93GCvG08OssZnPvbq4qMRUAvCJu7Rf54Y2SVdLyLWYq8YYDNM795R9aOA8T1BJDeDVqLH6OuDGiKfv58sDQNo1Cd9LFdikgn1cI5Cjqxh_grYkgMTlR13GSBkJ-r8yNSYoR0SIvVEmPAIR4u6VCOcrn2zxsMJ-NzMdCqSN-UuBDBzWyFfxkF3Fb4',
      creator: {
        id: 'creator-sofia',
        name: 'Sofia Coppola',
        avatarUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCDYvXXh-AOIO0yEajaS2z0fK0AXR9XMBgqslBJtqzt3BG9GuWPTl7OVuDB46BTuB_dStp_r2Z2yUverLJPoTE9c0DINUITH7ehWoNFo1y-UC5dzMfBFKjsGis_8BiCcB5zVSCGA18tDl0igGBTM5PPtLuIV89S5FOLbOLDjGJkZ68b7_ZngY0V1K7gFJaJnyvb96TgkXGFi8BGzdTWG3Tn1p2TAmefokQattA4O9nYV92mon-_B-6w9co_tuP_44mq9JqujsLUmQY',
        specialty: 'Directing'
      },
      lessonsCount: 8
    }
  ]);

  readonly shortFilms = signal<ShortFilmModel[]>([
    {
      id: 'short-neon-dreams',
      title: 'Neon Dreams',
      category: 'Noir City',
      thumbnailUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC6kDSYVWXIb1w4YZ6x05_bAhT-h1EWJC_nl_I6IKtArfpBQ3YRK3Kvwm7yMi5O3ZGESs_5UFHcg9R_4M-XedDSpjVA-69ghyfhIMQ5iWw9s4GqpoJyQQCRrY-bOO2VKbFcTBJg1J93fc1TgBy407jrkHbG68td6SyiviiuzDtirk7fE7pGB4pwKRTkz3f6mRGcEDfBY-s_JyGSteoqAzVKUiT7gCsl1QYVY_hp1rcYHpOjaITvOMai5WjbdLGEAkFMlLkhFELeV-I'
    },
    {
      id: 'short-prism-life',
      title: 'Prism Life',
      category: 'Experimental',
      thumbnailUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAhF0H9RtDI_hgkAphPpZFGdT2ZbKd8mvfkcY21REi5iin2pd4DJKXUTt-9Kt1SHch6RvZksHP4I51spIeNV4mi9oyrwLTaPOMOPGCCDR7N83nQKbrG0q6zko3cUlxAv8el4QbzQG3nZvFtJr0kLw6xsH8p1vYWwS1SsJSC5RCLUzNesDxLJ3FNL4SMr9SxSBm8Va6qZcWf3faZiATrve47IrygSfWqdkF3cAIDOIvHuJACJXXS9cJZ0upbOXJzt-iwRL1PsH4bXWw'
    },
    {
      id: 'short-blue-peak',
      title: 'Blue Peak',
      category: 'Nature',
      thumbnailUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC0TyFtgoFIdGAqzjQiP4Kcp4_-3w9BillIubWQBACih86DIy1_XbQqflypOpNxBdIDAx0MQPc-yHvDPkObAGH60stRU9nZo-CAAhzpua4l0AaP0dA6K8NFPxRYaO417XW3lOumx18leB7nokJj0ejOKHbRnOSKlc9i29Gc472cOdI1lhZxSWS8z10GZsvbth-OL25S9aBVXmbpwPxX9R500zolO9lBbVZ92WFJ9h36LkkPceNVNFtbFZDsjGXvDwbX1M7xxiP8jDg'
    },
    {
      id: 'short-silenzio',
      title: 'Silenzio',
      category: 'Portrait',
      thumbnailUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCghUOqe6LusuP1bmn464LabVhOKfAhSAqmBFbrnRvAoInale4xFIseJzQu1dJNjwuYAUn0utYY1RD4_uV7Ftmgk6RmuRM7Oq6rooO7fsU8tp2iR18YFt9wjSAukaqbD2HNEdcfQ7O6oCXyD96VqNldGAdYo4bbMquxOJl6LSAW-byiTGmqhyIrwMQYnWyWl75_C7sGs41r6MiKortUTw9vPFwv9oZb6ZPy9O41nNwMhOvimLT-4FcSmIatVagamcELs80l0ERoW8s'
    },
    {
      id: 'short-woodland',
      title: 'Woodland',
      category: 'Ambient',
      thumbnailUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCAv-i6LD3la1D7b4-catYrlKFAkKuEvA7YyYRfWCrORKKIxGdLcQoF8xJNvdVsfB1rurQWZ0-38i1Fj03HlL2DWJCOy8OxHv5ILUrYYq-sbiBXvFnhclUxRuq7_3PwUBZ0Aswi-_nHnE2AU4s7AsK7h9xRF6IskheWtraVIzFyBDiIJW51cYnpiYZI8s3mGqgT56hRT0sJhfrOLscE6TWlpnai8KS8auwhIKqruc3s8sYxD9jWsMSdA39DN736HJCB92koXksED0g'
    },
    {
      id: 'short-deep-breath',
      title: 'Deep Breath',
      category: 'Liquid',
      thumbnailUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCSvVyA-3lAEkvsqszAGsXG9bf6T4zNe1gmebCZUPe8VAHA_qhCuf9RoJ1xUS-HMw03qSsBRaNYPi-FgyRXbMiXMGfepLQBOhQx2kiizvRhQpMay7eRRGzHS4QPOrZMkzIxlT_IvhF2U19vEg_OCQxf22LRI-GKz9WeGuvd-7BMps4oyKOZDBeVXwyCwIGQ3liPjl-ghrySa6rqO6YHNeb-3eH8yuzqG66MaqZIXLVQg5aHJGzDRBgtZy6d1SaRWtP0inbueFAe1aE'
    }
  ]);

  readonly creatorDiscoveries = signal<CreatorDiscoveryModel[]>([
    {
      id: 'creator-elena',
      name: 'Elena Vance',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAqvqGaYRqe34trhiAaDNL9ZAo_kCWPLgDTbJ9fY1pofBdGKhBS0Z6QcjMWgSXqGdw49gy6qYN-yfEwnqH8qUFeCdFFVU2rjGbb8kaYVsCKaC54KL9Ka0RIHEIwp8q435nw62JsP65EfeNLIR82gA4e5XtkTa9dfmYfsjIDfJck4N4wEwYPgYqrtg4zdO9U2y5SWDAAcv6T5DvS3fhzEXfdmQ6BzRc3fFQFhGxgqp9ojvXqpNMLGcguq4Mi674-XPHoEYR9CGgnBFM',
      specialty: 'Cinematic Landscapes',
      category: 'Documentary',
      bio: 'Slow cinema travel essays built around weather, silence, and scale.',
      tagline: 'Epic landscapes with a meditative rhythm',
      followersLabel: '184K followers',
      statusLabel: 'Featured',
      sampleThumbnails: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC83aPCHkMb6q7SHuyIs-8i0hG1ivufu8cOAeq8EMy8jEm1JSpxXqRaRUIMT4auTBzAxo_IqhKx0X5TW0bIy5X-UeKxc5NxYZwEu5BU9sbTOoBLUfSjCK7HAaPkAsmdrTnnIB5l7e6X02A9d3bdJs3Q39mWWNZ-Vi5brV6zuKqxcyJpyNr9yClxw033vAUBqYluOhV_UZLS7JpGm1iOP7yvefhl03hKwHg1PJu6Lr-TcSmJieyDw2ymfNsx40R2IsJDrY1G4aN2LUk',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCVkZ99CQRQVn2B1b56lIPOBf4LnCQHj1dLD2GmtwagCx9yrH12hS6ZcBeR8sB3x9aeqJFUeMVD6o-1qsonA0O-KMftuh6yuYqs--p64RcvQWdrSOkZ_o_O7nEHBGXiJnp_DqpTbqlrwYTOLsS7swHaBFL2X2RgK8ss27LWjUsSKnntOkCpLlPnhAO5mjjV93IFTj7iNpmxFmz8-P-gww-ITbVVCfWVlKEZpUxaLLZixoaGulBmSjZnBCz0FrGjm8UfMW5VJTGIN4M',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC0TyFtgoFIdGAqzjQiP4Kcp4_-3w9BillIubWQBACih86DIy1_XbQqflypOpNxBdIDAx0MQPc-yHvDPkObAGH60stRU9nZo-CAAhzpua4l0AaP0dA6K8NFPxRYaO417XW3lOumx18leB7nokJj0ejOKHbRnOSKlc9i29Gc472cOdI1lhZxSWS8z10GZsvbth-OL25S9aBVXmbpwPxX9R500zolO9lBbVZ92WFJ9h36LkkPceNVNFtbFZDsjGXvDwbX1M7xxiP8jDg'
      ],
      recentHighlight: 'New film essay published 2 days ago'
    },
    {
      id: 'creator-marco',
      name: 'Marco Rossi',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDMZ695Jb1Wyz03XhC3YBOmGMNXGoTTlwg4CAdvS0qU47IQ-26Y0C-NeDc2Xje1SiiwnndWM6o8oJNKwtrZO5VKiBmMDwd5C-yTbHYxrAHluMKfpOjhIgOmaMoN1G6SG4PmJNevE4rwtZ6fZQWfffIxB_5YIehndRx1MLCbVR0P-ACSkU0NvIFBH55nSjKQGP0m8qU6ofbjvgDLgT7h8EAh-NkA_8CzoIfq4zOyl4eEXJisA0lp-_c0X2seFzrGJfw7VVCruuoHmA8',
      specialty: 'Architecture',
      category: 'Architecture',
      bio: 'Urban framing studies that turn buildings into narrative characters.',
      tagline: 'Architectural cinema with geometric tension',
      followersLabel: '92K followers',
      statusLabel: 'Rising',
      sampleThumbnails: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD4G0Rpg394BnkVLJnJ6wiZ1MYlwzqBjErudDoFjBohL0oQ2AHiC852llbTMJewr_d_Inpr70itgmJ7G1kCf2SbBeLtfZIffADouRJVIGuBmMtIfeqYoftwi7XW729XMoQGnQ2NjI_iPyJ3PIhsNb7GCD5dB8fxNb8NsN48_5E8Xkg2IobOQyFnomhmakG5C-NXo6r-ldTzJQvZZy2gf8HJ0wJFEZjEmJSkJ6PoIlK5PU6timvpw76iiRwCaiNyAlVBAHNlY6x-2SA',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB3UOMGzHO4aKMvlJXYTbR4XHdWXRZIiYlxJN7DDovMM-IKDSe4w8OzjrIf9bn6sn1bGtoATeZuGqKbhIYITGwDaIxXhWI3Qg2A7carMvauggREVpspT-HTjmwV4nUrWu5Z8D8m_FnLQKc-1uJEDlmLYlSnsR2cpRHKrH2T9ZJyhwkmsp1HxFzr79hhSGypF9uqFKTM0tG87iWu5evJitUlZcBO4l1AhQz3Ccrh8SJn5Y88LAowdc3AycD0nXOmbLoMZnnAP3JGTDM',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAhF0H9RtDI_hgkAphPpZFGdT2ZbKd8mvfkcY21REi5iin2pd4DJKXUTt-9Kt1SHch6RvZksHP4I51spIeNV4mi9oyrwLTaPOMOPGCCDR7N83nQKbrG0q6zko3cUlxAv8el4QbzQG3nZvFtJr0kLw6xsH8p1vYWwS1SsJSC5RCLUzNesDxLJ3FNL4SMr9SxSBm8Va6qZcWf3faZiATrve47IrygSfWqdkF3cAIDOIvHuJACJXXS9cJZ0upbOXJzt-iwRL1PsH4bXWw'
      ],
      recentHighlight: '3 new studies released this week'
    },
    {
      id: 'creator-sarah',
      name: 'Sarah Jenkins',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCbKnHsMWcYAvQWxyuVB4y94v7fCR1ZrYLCtKh0GBsocPMfjRBVwW0GIFbJCYsRGpmDlvQJhUSO1iG1So11YZzaT-EVdDfyCM8ijwuzPkcO2LcwxxMYcOYXVcsQONsfxgnVJid1DOnPhDvlv4VpP0FS7L-3emYLBbz9mCIoZ6mPm158vgFrUDKwgMSx_NZ9BcDdi-zwPRgzNK06ljYiNmNQ_YjqtMrUz-sHLS1Cdf78BrSiIFVrMB0m6LHGZUxD7bmv9cD6rKi7TkQ',
      specialty: 'Cinematography',
      category: 'Cinematography',
      bio: 'Behind-the-lens breakdowns focused on motion, blocking, and emotional framing.',
      tagline: 'Camera language decoded scene by scene',
      followersLabel: '211K followers',
      sampleThumbnails: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC54ooeVIzlmbcRQUPLKZaMwgg9kGca1DjYnMPlq-hQzYH6qhWeJW5Mvo1HofyjCwOjOUhAmmuC2dh-K2n_ydHI7TWwsvYZfIRJFHlhdj4-KTBy4sFcYbUjoiS_T1RhkY5vSiV80QcpOPhO4RhlnJID5kjIYKYmKDO2MyESx7XMoa_kYWqKdk-IlF7k1iCVhCWLavX8YNIXn68_wuNKChAH4MTDyPaOI_Zy_gHVLyi98PhZOffyPNYjjB7IHvmO8eGqWzRAukWT9C4',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBm7UOFJx9-jm55BohCg6uU3rzEYb26Kpk1VhY723HWN6h8sATas-MuodWeqHoyWByh4ECariumcukX7zwvdkl93GCvG08OssZnPvbq4qMRUAvCJu7Rf54Y2SVdLyLWYq8YYDNM795R9aOA8T1BJDeDVqLH6OuDGiKfv58sDQNo1Cd9LFdikgn1cI5Cjqxh_grYkgMTlR13GSBkJ-r8yNSYoR0SIvVEmPAIR4u6VCOcrn2zxsMJ-NzMdCqSN-UuBDBzWyFfxkF3Fb4',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCSvVyA-3lAEkvsqszAGsXG9bf6T4zNe1gmebCZUPe8VAHA_qhCuf9RoJ1xUS-HMw03qSsBRaNYPi-FgyRXbMiXMGfepLQBOhQx2kiizvRhQpMay7eRRGzHS4QPOrZMkzIxlT_IvhF2U19vEg_OCQxf22LRI-GKz9WeGuvd-7BMps4oyKOZDBeVXwyCwIGQ3liPjl-ghrySa6rqO6YHNeb-3eH8yuzqG66MaqZIXLVQg5aHJGzDRBgtZy6d1SaRWtP0inbueFAe1aE'
      ],
      recentHighlight: 'Live lens breakdown tonight'
    },
    {
      id: 'creator-neo',
      name: 'Neo K.',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC5ovT8oIArTqylvalwAzF2ryAVTLktSJNaNeq9zcUiUPVowWfm2cYaizR_c6DhAo9GNaR_pd_KyxgpWjhAFFBGkT8YwiiFRmOxoROc1LBCiEWusZBJSCUTcJTYfEkZAGuE3-Ham4Yt2vneBMsdndiq43nsDE4SiLOTe1fgTw9_oQBVa2PXACO8EttRhlF8g6-x97F7RRmIdKoM54ojrK7tzeUsq4Zj42b_JC0xkcPiHxNv37I4jNdXIq_QjjvfKlAs-uTAmmZ4pKo',
      specialty: 'Cyberpunk Art',
      category: 'Experimental',
      bio: 'Fast-cut neon fiction blending motion graphics, fashion lighting, and city textures.',
      tagline: 'Synthetic futures and kinetic color',
      followersLabel: '68K followers',
      statusLabel: 'Niche pick',
      sampleThumbnails: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDaI6X_T8MVNl7ee5gtYq7IBDlQNtuEi9YUW84CawHulOftuw1g3Ayrp4m9bMAy1BtxAjZ-F4hf1BYM62BGPfgBFweNPuq6zDVLUWR5qGXlBsA62kVmCpKuRpolvLWxPlro7L5nKEqh_eeW82zjJOOXo3ibL61gIInql12PwyRmU5RDFyBtrI_bOvMSj7F-SRUp3qeTm_G-m-U3Qv9jfG2QbqHSsBGtYygCt_n7IEdYBnqTDAd2zNfmiXx2_caukB7WZiUKLY2lauE',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC6kDSYVWXIb1w4YZ6x05_bAhT-h1EWJC_nl_I6IKtArfpBQ3YRK3Kvwm7yMi5O3ZGESs_5UFHcg9R_4M-XedDSpjVA-69ghyfhIMQ5iWw9s4GqpoJyQQCRrY-bOO2VKbFcTBJg1J93fc1TgBy407jrkHbG68td6SyiviiuzDtirk7fE7pGB4pwKRTkz3f6mRGcEDfBY-s_JyGSteoqAzVKUiT7gCsl1QYVY_hp1rcYHpOjaITvOMai5WjbdLGEAkFMlLkhFELeV-I',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCghUOqe6LusuP1bmn464LabVhOKfAhSAqmBFbrnRvAoInale4xFIseJzQu1dJNjwuYAUn0utYY1RD4_uV7Ftmgk6RmuRM7Oq6rooO7fsU8tp2iR18YFt9wjSAukaqbD2HNEdcfQ7O6oCXyD96VqNldGAdYo4bbMquxOJl6LSAW-byiTGmqhyIrwMQYnWyWl75_C7sGs41r6MiKortUTw9vPFwv9oZb6ZPy9O41nNwMhOvimLT-4FcSmIatVagamcELs80l0ERoW8s'
      ],
      recentHighlight: 'Preview reel updated yesterday'
    },
    {
      id: 'creator-wild',
      name: 'Wild Lens',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAwyqamvX-JbSrp75TruCvOPcAfjmNBjHaCU-B4dchE3K-AybYK93gh5Eo1JsUAmPV2dpQCrwb-bNvwaFZWk4MW1fUCJKXhQQl12eeil8og7oX7ntv6nAiOUtg3L2M0guteTobj9vIIO39wMuzNucMFC849S1IA9V89clagGWlkWhHY8cCHnotrHyFCaFiFsXkLItcyV-2WbqVPuLJCSjKd0fbzrFrlHKTaaFfjzwYizGznWZcUew0FilOOhGckzyw6Ndhr90dxfFQ',
      specialty: 'Documentary',
      category: 'Nature',
      bio: 'Immersive wildlife stories with a conservation-first perspective.',
      tagline: 'Natural worlds, patient cameras, human stakes',
      followersLabel: '123K followers',
      sampleThumbnails: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCVkZ99CQRQVn2B1b56lIPOBf4LnCQHj1dLD2GmtwagCx9yrH12hS6ZcBeR8sB3x9aeqJFUeMVD6o-1qsonA0O-KMftuh6yuYqs--p64RcvQWdrSOkZ_o_O7nEHBGXiJnp_DqpTbqlrwYTOLsS7swHaBFL2X2RgK8ss27LWjUsSKnntOkCpLlPnhAO5mjjV93IFTj7iNpmxFmz8-P-gww-ITbVVCfWVlKEZpUxaLLZixoaGulBmSjZnBCz0FrGjm8UfMW5VJTGIN4M',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCAv-i6LD3la1D7b4-catYrlKFAkKuEvA7YyYRfWCrORKKIxGdLcQoF8xJNvdVsfB1rurQWZ0-38i1Fj03HlL2DWJCOy8OxHv5ILUrYYq-sbiBXvFnhclUxRuq7_3PwUBZ0Aswi-_nHnE2AU4s7AsK7h9xRF6IskheWtraVIzFyBDiIJW51cYnpiYZI8s3mGqgT56hRT0sJhfrOLscE6TWlpnai8KS8auwhIKqruc3s8sYxD9jWsMSdA39DN736HJCB92koXksED0g',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC0TyFtgoFIdGAqzjQiP4Kcp4_-3w9BillIubWQBACih86DIy1_XbQqflypOpNxBdIDAx0MQPc-yHvDPkObAGH60stRU9nZo-CAAhzpua4l0AaP0dA6K8NFPxRYaO417XW3lOumx18leB7nokJj0ejOKHbRnOSKlc9i29Gc472cOdI1lhZxSWS8z10GZsvbth-OL25S9aBVXmbpwPxX9R500zolO9lBbVZ92WFJ9h36LkkPceNVNFtbFZDsjGXvDwbX1M7xxiP8jDg'
      ],
      recentHighlight: 'New expedition diary this weekend'
    }
  ]);
}
