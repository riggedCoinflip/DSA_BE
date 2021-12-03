import { PartialType } from "@nestjs/swagger";
import { CreateHeroRequestDto } from "./create-hero-request.dto";

export class UpdateHeroRequestDto extends PartialType(CreateHeroRequestDto){}