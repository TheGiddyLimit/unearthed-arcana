import {BrewTester} from "5etools-utils";

const _ALLOWLIST_DIRS = new Set([
	"UA2020SpellsAndMagicTattoos",
	"UA2020SubclassesPt2",
	"UA2020SubclassesPt5",
	"UA2021DraconicOptions",
	"UA2021MagesOfStrixhaven",
	"UA2022GiantOptions",
	"UA2022WondersOfTheMultiverse",
	"UAArtificerRevisited",
	"UAClassFeatureVariants",
	"UAClericDruidWizard",
	"XUA2024Artificer",
	"XUA2025ApocalypticSubclasses",
	"XUA2025ArcaneSubclasses",
	"XUA2025ArcaneUpdates",
	"XUA2025EberronUpdates",
	"XUA2025ForgottenRealmsSubclasses",
	"XUA2025HorrorSubclasses",
	"XUA2025Psion",
	"XUA2025PsionUpdate",
	"XUA2025SubclassesUpdate",
	"XUA2026MysticSubclasses",
]);

await BrewTester.pTestImgDirectories({
	dirAllowlist: _ALLOWLIST_DIRS,
});
